import validation from '../../../utils/validation';
import axios from 'axios';
import {
  SearchBooksResponse,
  QuerySearchBooksArgs,
} from '../../../types/types';
import Book from '../../../entities/Book';
import { Like } from 'typeorm';

const resolvers = {
  Query: {
    SearchBooks: async (
      _,
      args: QuerySearchBooksArgs,
      context,
    ): Promise<SearchBooksResponse> => {
      const crawl = async (hangul) => {
        try {
          const { data } = await axios.get(
            'https://openapi.naver.com/v1/search/book.json?query=' +
              encodeURI(hangul) +
              '&display=100' +
              '&sort=count',
            {
              headers: {
                'X-Naver-Client-Id': '8kdj1IIbhcAzIlKr2I34',
                'X-Naver-Client-Secret': 'Ufs1EvtkFl',
              },
            },
          );
          for (let b of data.items) {
            if (b.isbn) {
              try {
                const newBook = new Book();
                newBook.title = b.title.replace(/<\/?[^>]+(>|$)/g, '');
                newBook.link = b.link;
                newBook.image = b.image?.replace('type=m1&', '');
                newBook.author = b.author;
                newBook.price = b.price;
                newBook.publisher = b.publisher;
                newBook.pubdate = b.pubdate;
                newBook.isbn = b.isbn;
                let description = b.description.replace(/<\/?[^>]+(>|$)/g, '');
                if (description.length >= 255) {
                  const index = description.lastIndexOf(' ', 252);
                  description = description.slice(0, index).concat('...');
                }
                newBook.description = description;
                await newBook.save();
              } catch (error) {
                console.log('DB ERROR', error.message);
              }
            }
          }
        } catch (error) {
          console.log('Axios', error.message);
        }
      };
      await crawl(args.title);
      try {
        const books: any = await Book.find({
          where: {
            title: Like(`%${args.title}%`),
          },
          order: { views: 'DESC' },
          take: args.max || 10,
        });

        return {
          ok: true,
          error: null,
          books,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
export default resolvers;

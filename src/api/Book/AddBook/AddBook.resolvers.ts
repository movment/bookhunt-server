import { AddBookResponse, MutationAddBookArgs } from '../../../types/types';
import Book from '../../../entities/Book';
import validation from '../../../utils/validation';

const resolvers = {
  Mutation: {
    AddBook: validation(
      async (_, args: MutationAddBookArgs): Promise<AddBookResponse> => {
        const { title, author, translator, image } = args;
        try {
          const book = new Book();
          book.title = title;
          book.author = author;
          book.translator = translator;
          book.image = image;

          await book.save();

          return {
            ok: true,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolvers;

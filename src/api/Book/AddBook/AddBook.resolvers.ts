import { AddBookResponse, MutationAddBookArgs } from '../../../types/types';
import Book from '../../../entities/Book';

const resolvers = {
  Mutation: {
    AddBook: async (_, args: MutationAddBookArgs): Promise<AddBookResponse> => {
      const { title, author, translator, image } = args;
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
    },
  },
};

export default resolvers;

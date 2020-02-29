export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBookInListResponse = {
  __typename?: 'AddBookInListResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type AddBookListResponse = {
  __typename?: 'AddBookListResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  list?: Maybe<List>;
};

export type AddBookResponse = {
  __typename?: 'AddBookResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type AddCelebResponse = {
  __typename?: 'AddCelebResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  celeb?: Maybe<Celeb>;
};

export type AddFavoriteResponse = {
  __typename?: 'AddFavoriteResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  id: Scalars['Int'];
  title: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  author: Scalars['String'];
  translator?: Maybe<Scalars['String']>;
  publisher?: Maybe<Scalars['String']>;
  pubdate?: Maybe<Scalars['String']>;
  isbn?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  reviewers?: Maybe<Array<Maybe<User>>>;
};

export type Celeb = {
  __typename?: 'Celeb';
  id: Scalars['Int'];
  name: Scalars['String'];
  career: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type GetBooksResponse = {
  __typename?: 'GetBooksResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type GetCelebListResponse = {
  __typename?: 'GetCelebListResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  celebs?: Maybe<Array<Maybe<Celeb>>>;
};

export type GetListsResponse = {
  __typename?: 'GetListsResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  lists?: Maybe<Array<Maybe<List>>>;
};

export type List = {
  __typename?: 'List';
  id: Scalars['Int'];
  title: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddBook: AddBookResponse;
  AddCeleb: AddCelebResponse;
  AddBookInList: AddBookInListResponse;
  AddBookList: AddBookListResponse;
  AddFavorite: AddFavoriteResponse;
  SignIn: SignInResponse;
  SignOut: SignOutResponse;
  SignUp: SignUpResponse;
};

export type MutationAddBookArgs = {
  title: Scalars['String'];
  author: Scalars['String'];
  translator?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type MutationAddCelebArgs = {
  name: Scalars['String'];
  career: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type MutationAddBookInListArgs = {
  bookId: Scalars['String'];
  listId: Scalars['String'];
};

export type MutationAddBookListArgs = {
  title: Scalars['String'];
};

export type MutationAddFavoriteArgs = {
  bookId: Scalars['String'];
};

export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  career?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export enum Options {
  All = 'ALL',
  My = 'MY',
}

export type Query = {
  __typename?: 'Query';
  GetBooks: GetBooksResponse;
  SearchBooks: SearchBooksResponse;
  GetCelebList: GetCelebListResponse;
  GetLists: GetListsResponse;
};

export type QueryGetBooksArgs = {
  id?: Maybe<Scalars['String']>;
};

export type QuerySearchBooksArgs = {
  title: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
};

export type QueryGetListsArgs = {
  type?: Maybe<Options>;
};

export type SearchBooksResponse = {
  __typename?: 'SearchBooksResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type SignOutResponse = {
  __typename?: 'SignOutResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name: Scalars['String'];
  /**
   * email: String!
   * password: String!
   */
  career?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

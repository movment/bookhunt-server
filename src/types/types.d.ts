export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type AddBookInListResponse = {
   __typename?: 'AddBookInListResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type AddBookListResponse = {
   __typename?: 'AddBookListResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  list?: Maybe<List>,
};

export type AddBookResponse = {
   __typename?: 'AddBookResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type AddCelebResponse = {
   __typename?: 'AddCelebResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  celeb?: Maybe<Celeb>,
};

export type AddFavoriteResponse = {
   __typename?: 'AddFavoriteResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type AddReviewResponse = {
   __typename?: 'AddReviewResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  reviewId?: Maybe<Scalars['Int']>,
};

export type Book = {
   __typename?: 'Book',
  id: Scalars['Int'],
  title: Scalars['String'],
  link?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
  author: Scalars['String'],
  translator?: Maybe<Scalars['String']>,
  publisher?: Maybe<Scalars['String']>,
  pubdate?: Maybe<Scalars['String']>,
  isbn?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  isFav?: Maybe<Scalars['Boolean']>,
  reviews?: Maybe<Array<Maybe<Review>>>,
};

export type Celeb = {
   __typename?: 'Celeb',
  id: Scalars['Int'],
  name: Scalars['String'],
  career: Scalars['String'],
  image?: Maybe<Scalars['String']>,
};

export type DelReviewResponse = {
   __typename?: 'DelReviewResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type GetBooksInListResponse = {
   __typename?: 'GetBooksInListResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<Book>>>,
  list?: Maybe<List>,
};

export type GetBooksResponse = {
   __typename?: 'GetBooksResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<Book>>>,
  max?: Maybe<Scalars['Int']>,
};

export type GetCelebListResponse = {
   __typename?: 'GetCelebListResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  celebs?: Maybe<Array<Maybe<Celeb>>>,
};

export type GetListsOfBookResponse = {
   __typename?: 'GetListsOfBookResponse',
  ok: Scalars['Boolean'],
  errors?: Maybe<Array<Maybe<Scalars['String']>>>,
  lists?: Maybe<Array<Maybe<List>>>,
};

export type GetListsResponse = {
   __typename?: 'GetListsResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  lists?: Maybe<Array<Maybe<List>>>,
  max?: Maybe<Scalars['Int']>,
};

export type GetReviewsResponse = {
   __typename?: 'GetReviewsResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  reviews?: Maybe<Array<Maybe<Review>>>,
};

export type List = {
   __typename?: 'List',
  id: Scalars['Int'],
  title: Scalars['String'],
  user: User,
};

export type Mutation = {
   __typename?: 'Mutation',
  AddBook: AddBookResponse,
  AddCeleb: AddCelebResponse,
  AddBookInList: AddBookInListResponse,
  AddBookList: AddBookListResponse,
  AddReview: AddReviewResponse,
  DelReview: DelReviewResponse,
  AddFavorite: AddFavoriteResponse,
  SignIn: SignInResponse,
  SignOut: SignOutResponse,
  SignUp: SignUpResponse,
};


export type MutationAddBookArgs = {
  title: Scalars['String'],
  author: Scalars['String'],
  translator?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>
};


export type MutationAddCelebArgs = {
  name: Scalars['String'],
  career: Scalars['String'],
  image?: Maybe<Scalars['String']>
};


export type MutationAddBookInListArgs = {
  bookId: Scalars['Int'],
  listId: Scalars['Int']
};


export type MutationAddBookListArgs = {
  title: Scalars['String']
};


export type MutationAddReviewArgs = {
  bookId: Scalars['Int'],
  comment: Scalars['String'],
  rating: Rating
};


export type MutationDelReviewArgs = {
  reviewId: Scalars['Int']
};


export type MutationAddFavoriteArgs = {
  bookId: Scalars['Int']
};


export type MutationSignInArgs = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type MutationSignUpArgs = {
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  career?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>
};

export enum Options {
  All = 'ALL',
  My = 'MY'
}

export type Query = {
   __typename?: 'Query',
  GetBooks: GetBooksResponse,
  SearchBooks: SearchBooksResponse,
  GetCelebList: GetCelebListResponse,
  GetBooksInList: GetBooksInListResponse,
  GetLists: GetListsResponse,
  GetListsOfBook: GetListsOfBookResponse,
  GetReviews: GetReviewsResponse,
};


export type QueryGetBooksArgs = {
  bookId?: Maybe<Scalars['Int']>,
  sort?: Maybe<SortOptions>,
  page?: Maybe<Scalars['Int']>
};


export type QuerySearchBooksArgs = {
  title: Scalars['String'],
  max?: Maybe<Scalars['Int']>
};


export type QueryGetBooksInListArgs = {
  listId: Scalars['Int']
};


export type QueryGetListsArgs = {
  type?: Maybe<Options>,
  sort?: Maybe<SortOptions>,
  page?: Maybe<Scalars['Int']>
};


export type QueryGetListsOfBookArgs = {
  bookId: Scalars['Int']
};


export type QueryGetReviewsArgs = {
  bookId: Scalars['Int']
};

export enum Rating {
  One = 'ONE',
  Two = 'TWO',
  Three = 'THREE',
  For = 'FOR',
  Five = 'FIVE'
}

export type Review = {
   __typename?: 'Review',
  id: Scalars['Int'],
  comment: Scalars['String'],
  rating: Rating,
  user?: Maybe<User>,
  createdAt?: Maybe<Scalars['String']>,
};

export type SearchBooksResponse = {
   __typename?: 'SearchBooksResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<Book>>>,
};

export type SignInResponse = {
   __typename?: 'SignInResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
};

export type SignOutResponse = {
   __typename?: 'SignOutResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type SignUpResponse = {
   __typename?: 'SignUpResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export enum SortOptions {
  Views = 'VIEWS',
  Pubdate = 'PUBDATE'
}

export type User = {
   __typename?: 'User',
  id: Scalars['Int'],
  name: Scalars['String'],
  /** 
 * email: String!
   * password: String!
 */
  career?: Maybe<Scalars['String']>,
  image?: Maybe<Scalars['String']>,
};

import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
};

export type AddFavoriteResponse = {
   __typename?: 'AddFavoriteResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
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
  reviewers?: Maybe<Array<Maybe<User>>>,
};

export type Celeb = {
   __typename?: 'Celeb',
  id: Scalars['Int'],
  name: Scalars['String'],
  career: Scalars['String'],
  image?: Maybe<Scalars['String']>,
};

export type GetBooksResponse = {
   __typename?: 'GetBooksResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  books?: Maybe<Array<Maybe<Book>>>,
};

export type GetCelebListResponse = {
   __typename?: 'GetCelebListResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  Celebs?: Maybe<Array<Maybe<Celeb>>>,
};

export type GetListsResponse = {
   __typename?: 'GetListsResponse',
  ok: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
  lists?: Maybe<Array<Maybe<List>>>,
};

export type List = {
   __typename?: 'List',
  id: Scalars['Int'],
  title: Scalars['String'],
  user: User,
  books?: Maybe<Array<Maybe<Book>>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  AddBook: AddBookResponse,
  AddCeleb?: Maybe<AddCelebResponse>,
  AddBookInList: AddBookInListResponse,
  AddBookList: AddBookListResponse,
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
  bookId: Scalars['String'],
  listId: Scalars['String']
};


export type MutationAddBookListArgs = {
  title: Scalars['String']
};


export type MutationAddFavoriteArgs = {
  bookId: Scalars['String']
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
  GetBooks?: Maybe<GetBooksResponse>,
  SearchBooks?: Maybe<SearchBooksResponse>,
  GetCelebList: GetCelebListResponse,
  GetLists: GetListsResponse,
};


export type QueryGetBooksArgs = {
  id?: Maybe<Scalars['String']>
};


export type QuerySearchBooksArgs = {
  title: Scalars['String'],
  max?: Maybe<Scalars['Int']>
};


export type QueryGetListsArgs = {
  type?: Maybe<Options>
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  GetBooksResponse: ResolverTypeWrapper<GetBooksResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Book: ResolverTypeWrapper<Book>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  User: ResolverTypeWrapper<User>,
  SearchBooksResponse: ResolverTypeWrapper<SearchBooksResponse>,
  GetCelebListResponse: ResolverTypeWrapper<GetCelebListResponse>,
  Celeb: ResolverTypeWrapper<Celeb>,
  options: Options,
  GetListsResponse: ResolverTypeWrapper<GetListsResponse>,
  List: ResolverTypeWrapper<List>,
  Mutation: ResolverTypeWrapper<{}>,
  AddBookResponse: ResolverTypeWrapper<AddBookResponse>,
  AddCelebResponse: ResolverTypeWrapper<AddCelebResponse>,
  AddBookInListResponse: ResolverTypeWrapper<AddBookInListResponse>,
  AddBookListResponse: ResolverTypeWrapper<AddBookListResponse>,
  AddFavoriteResponse: ResolverTypeWrapper<AddFavoriteResponse>,
  SignInResponse: ResolverTypeWrapper<SignInResponse>,
  SignOutResponse: ResolverTypeWrapper<SignOutResponse>,
  SignUpResponse: ResolverTypeWrapper<SignUpResponse>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  GetBooksResponse: GetBooksResponse,
  Boolean: Scalars['Boolean'],
  Book: Book,
  Int: Scalars['Int'],
  User: User,
  SearchBooksResponse: SearchBooksResponse,
  GetCelebListResponse: GetCelebListResponse,
  Celeb: Celeb,
  options: Options,
  GetListsResponse: GetListsResponse,
  List: List,
  Mutation: {},
  AddBookResponse: AddBookResponse,
  AddCelebResponse: AddCelebResponse,
  AddBookInListResponse: AddBookInListResponse,
  AddBookListResponse: AddBookListResponse,
  AddFavoriteResponse: AddFavoriteResponse,
  SignInResponse: SignInResponse,
  SignOutResponse: SignOutResponse,
  SignUpResponse: SignUpResponse,
};

export type AddBookInListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBookInListResponse'] = ResolversParentTypes['AddBookInListResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddBookListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBookListResponse'] = ResolversParentTypes['AddBookListResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  list?: Resolver<Maybe<ResolversTypes['List']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddBookResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddBookResponse'] = ResolversParentTypes['AddBookResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddCelebResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddCelebResponse'] = ResolversParentTypes['AddCelebResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AddFavoriteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddFavoriteResponse'] = ResolversParentTypes['AddFavoriteResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type BookResolvers<ContextType = any, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  author?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  translator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  publisher?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  pubdate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isbn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  reviewers?: Resolver<Maybe<Array<Maybe<ResolversTypes['User']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CelebResolvers<ContextType = any, ParentType extends ResolversParentTypes['Celeb'] = ResolversParentTypes['Celeb']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  career?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetBooksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetBooksResponse'] = ResolversParentTypes['GetBooksResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetCelebListResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetCelebListResponse'] = ResolversParentTypes['GetCelebListResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Celebs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Celeb']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GetListsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetListsResponse'] = ResolversParentTypes['GetListsResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  lists?: Resolver<Maybe<Array<Maybe<ResolversTypes['List']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ListResolvers<ContextType = any, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  AddBook?: Resolver<ResolversTypes['AddBookResponse'], ParentType, ContextType, RequireFields<MutationAddBookArgs, 'title' | 'author'>>,
  AddCeleb?: Resolver<Maybe<ResolversTypes['AddCelebResponse']>, ParentType, ContextType, RequireFields<MutationAddCelebArgs, 'name' | 'career'>>,
  AddBookInList?: Resolver<ResolversTypes['AddBookInListResponse'], ParentType, ContextType, RequireFields<MutationAddBookInListArgs, 'bookId' | 'listId'>>,
  AddBookList?: Resolver<ResolversTypes['AddBookListResponse'], ParentType, ContextType, RequireFields<MutationAddBookListArgs, 'title'>>,
  AddFavorite?: Resolver<ResolversTypes['AddFavoriteResponse'], ParentType, ContextType, RequireFields<MutationAddFavoriteArgs, 'bookId'>>,
  SignIn?: Resolver<ResolversTypes['SignInResponse'], ParentType, ContextType, RequireFields<MutationSignInArgs, 'email' | 'password'>>,
  SignOut?: Resolver<ResolversTypes['SignOutResponse'], ParentType, ContextType>,
  SignUp?: Resolver<ResolversTypes['SignUpResponse'], ParentType, ContextType, RequireFields<MutationSignUpArgs, 'name' | 'email' | 'password'>>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  GetBooks?: Resolver<Maybe<ResolversTypes['GetBooksResponse']>, ParentType, ContextType, QueryGetBooksArgs>,
  SearchBooks?: Resolver<Maybe<ResolversTypes['SearchBooksResponse']>, ParentType, ContextType, RequireFields<QuerySearchBooksArgs, 'title'>>,
  GetCelebList?: Resolver<ResolversTypes['GetCelebListResponse'], ParentType, ContextType>,
  GetLists?: Resolver<ResolversTypes['GetListsResponse'], ParentType, ContextType, QueryGetListsArgs>,
};

export type SearchBooksResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchBooksResponse'] = ResolversParentTypes['SearchBooksResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SignInResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignInResponse'] = ResolversParentTypes['SignInResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SignOutResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignOutResponse'] = ResolversParentTypes['SignOutResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SignUpResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SignUpResponse'] = ResolversParentTypes['SignUpResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  career?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  AddBookInListResponse?: AddBookInListResponseResolvers<ContextType>,
  AddBookListResponse?: AddBookListResponseResolvers<ContextType>,
  AddBookResponse?: AddBookResponseResolvers<ContextType>,
  AddCelebResponse?: AddCelebResponseResolvers<ContextType>,
  AddFavoriteResponse?: AddFavoriteResponseResolvers<ContextType>,
  Book?: BookResolvers<ContextType>,
  Celeb?: CelebResolvers<ContextType>,
  GetBooksResponse?: GetBooksResponseResolvers<ContextType>,
  GetCelebListResponse?: GetCelebListResponseResolvers<ContextType>,
  GetListsResponse?: GetListsResponseResolvers<ContextType>,
  List?: ListResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  SearchBooksResponse?: SearchBooksResponseResolvers<ContextType>,
  SignInResponse?: SignInResponseResolvers<ContextType>,
  SignOutResponse?: SignOutResponseResolvers<ContextType>,
  SignUpResponse?: SignUpResponseResolvers<ContextType>,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

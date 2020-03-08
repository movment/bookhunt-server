import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import Share from './Share';
import User from './User';
import Booklist from './Booklist';
import Review from './Review';

@Entity()
class Book extends Share {
  // public isFav: Boolean;
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  link: string | null | undefined;

  @Column({ type: 'varchar', nullable: true })
  image: string | null | undefined;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'varchar', nullable: true })
  translator: string | null | undefined;

  @Column({ type: 'varchar', nullable: true })
  price: string | null | undefined;

  @Column({ type: 'varchar', nullable: true })
  publisher: string | null | undefined;

  @Column({ type: 'varchar', nullable: true })
  pubdate: string | null | undefined;

  @Column({ type: 'varchar', nullable: true, unique: true })
  isbn: string | null | undefined;

  @Column({ type: 'varchar', nullable: true })
  description: string | null | undefined;

  @Column({ default: 0 })
  views: number;

  @ManyToMany(
    (type) => User,
    (user) => user.books,
  )
  users: User[];

  // @ManyToMany((type) => User, { cascade: true, onDelete: 'CASCADE' })
  // @JoinTable({
  //   name: 'book_review',
  // })
  // reviewers: User[];

  @OneToMany(
    (type) => Review,
    (review) => review.book,
    { cascade: true, onDelete: 'CASCADE' },
  )
  reviews: Review[];

  // public isFav: boolean;
}

export default Book;

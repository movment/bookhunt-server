import Share from './Share';
import { Entity, Column, ManyToOne } from 'typeorm';
import Book from './Book';
import User from './User';

type Rating = 1 | 2 | 3 | 4 | 5;

@Entity()
class Review extends Share {
  @Column({ type: 'varchar' })
  comment: string;

  @Column({ type: 'enum', enum: [1, 2, 3, 4, 5], default: 3 })
  rating: Rating;

  @ManyToOne(
    (type) => Book,
    (book) => book.reviews,
  )
  book: Book;
  @Column()
  bookId: number;

  @ManyToOne(
    (type) => User,
    (user) => user.reviews,
    {
      eager: true,
    },
  )
  user: User;
  @Column()
  userId: number;
}

export default Review;

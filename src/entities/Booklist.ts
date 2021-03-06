import { Entity, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import Share from './Share';
import User from './User';
import Book from './Book';
import Hashtag from './Hashtag';

@Entity()
class Booklist extends Share {
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ default: 0 })
  views: number;

  @ManyToOne(
    (type) => User,
    (user) => user.lists,
    { nullable: true, eager: true },
  )
  user: User;
  @Column()
  userId: number;

  @ManyToMany((type) => Book, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'book_list',
  })
  books: Book[];

  @ManyToMany((type) => Hashtag, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'list_hashtag',
  })
  hashtags: Hashtag[];
}

export default Booklist;

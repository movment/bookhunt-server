import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import Share from './Share';
import User from './User';

@Entity()
class Book extends Share {
  @Column({ type: 'varchar', length: 50 })
  title: string;

  @Column({ type: 'varchar', length: 50 })
  author: string;

  @Column({ type: 'varchar', length: 50 })
  translator: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @ManyToMany((type) => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'book_review',
  })
  reviewers: User[];
}

export default Book;

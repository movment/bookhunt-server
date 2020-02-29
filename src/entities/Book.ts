import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import Share from './Share';
import User from './User';

@Entity()
class Book extends Share {
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

  @ManyToMany((type) => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'book_review',
  })
  reviewers: User[];
}

export default Book;

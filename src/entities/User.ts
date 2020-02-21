import { Entity, Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import Share from './Share';
import Booklist from './Booklist';
import Book from './Book';

@Entity()
class User extends Share {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  career: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string;

  @OneToMany(
    (type) => Booklist,
    (booklist) => booklist.user,
    { cascade: true, onDelete: 'CASCADE' },
  )
  lists: Booklist[];

  @ManyToMany((type) => Book, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'book_user',
  })
  books: Book[];

  @ManyToMany((type) => Booklist, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'list_like',
  })
  favLists: Booklist[];

  @ManyToMany((type) => User, { cascade: true, onDelete: 'CASCADE' })
  @JoinTable({
    name: 'follow',
    joinColumn: {
      name: 'followerId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'followingId',
      referencedColumnName: 'id',
    },
  })
  followings: User[];
}

export default User;

import {
  Entity,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import bcrypt from 'bcrypt';
import Share from './Share';
import Booklist from './Booklist';
import Book from './Book';
import { userInfo } from 'os';
import Review from './Review';

@Entity()
class User extends Share {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  career: string | undefined | null;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image: string | undefined | null;

  @Column({ type: 'varchar', length: 50, nullable: true })
  naverId: string | undefined | null;

  @OneToMany(
    (type) => Booklist,
    (booklist) => booklist.user,
    { cascade: true, onDelete: 'CASCADE' },
  )
  lists: Booklist[];

  @OneToMany(
    (type) => Review,
    (review) => review.user,
    { cascade: true, onDelete: 'CASCADE' },
  )
  reviews: Review[];

  @ManyToMany(
    (type) => Book,
    (book) => book.users,
    { cascade: true, onDelete: 'CASCADE' },
  )
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

  comparePassword(password): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  @BeforeInsert()
  encodePassword() {
    if (this.password) {
      const hashedPassword = bcrypt.hashSync(this.password, 12);
      this.password = hashedPassword;
    }
  }
}

export default User;

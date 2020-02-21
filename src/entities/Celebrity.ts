import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import Share from './Share';
import Booklist from './Booklist';

@Entity()
class Celebrity extends Share {
  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  career: string;

  @Column({ type: 'varchar', length: 255 })
  image: string;

  @OneToOne((type) => Booklist)
  @JoinColumn()
  list: Booklist;
}

export default Celebrity;

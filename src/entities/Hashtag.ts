import { Entity, Column } from 'typeorm';
import Share from './Share';

@Entity()
class Hashtag extends Share {
  @Column({ type: 'varchar', length: 50 })
  title: string;
}

export default Hashtag;

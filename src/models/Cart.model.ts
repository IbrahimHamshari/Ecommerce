import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import ModelBase from "./ModelBase/ModelBase";
import { User } from '../models'
import { Product } from '../models'
import { CartProduct } from '../models'

@Table({
  tableName: "carts",
})
export class Cart extends ModelBase<Cart> {
  @ForeignKey(() => User)
  @Column({ allowNull: false, type: DataType.INTEGER })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @BelongsToMany(() => Product, () => CartProduct)
  products!: Product[];
}

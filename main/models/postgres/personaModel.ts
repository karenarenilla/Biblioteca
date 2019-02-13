import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class PersonaSchema {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({
        length: 100,
    })
    public name?: string;

    @Column()
    public document?: string;

    @Column()
    public roll?: string;

    constructor(name?: string, document?: string, roll?: string) {
        this.name = name;
        this.document = document;
        this.roll = roll;
    }
}

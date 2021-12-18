import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongoSchema } from 'mongoose';

export type LessonDocument = Lesson & Document;

@Schema()
export class Lesson {
	@Prop()
		id: number;
	@Prop()
		name: string;
	@Prop()
		completed: boolean;
	@Prop({type: MongoSchema.Types.Decimal128})
		progress: number; // 0 -> 1 (perc)

}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
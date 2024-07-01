/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CssInspectionWhereInput } from "./CssInspectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CssInspectionOrderByInput } from "./CssInspectionOrderByInput";

@ArgsType()
class CssInspectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CssInspectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CssInspectionWhereInput, { nullable: true })
  @Type(() => CssInspectionWhereInput)
  where?: CssInspectionWhereInput;

  @ApiProperty({
    required: false,
    type: [CssInspectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CssInspectionOrderByInput], { nullable: true })
  @Type(() => CssInspectionOrderByInput)
  orderBy?: Array<CssInspectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CssInspectionFindManyArgs as CssInspectionFindManyArgs };
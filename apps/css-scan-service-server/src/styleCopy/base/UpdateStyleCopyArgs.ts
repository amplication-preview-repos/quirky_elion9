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
import { StyleCopyWhereUniqueInput } from "./StyleCopyWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StyleCopyUpdateInput } from "./StyleCopyUpdateInput";

@ArgsType()
class UpdateStyleCopyArgs {
  @ApiProperty({
    required: true,
    type: () => StyleCopyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StyleCopyWhereUniqueInput)
  @Field(() => StyleCopyWhereUniqueInput, { nullable: false })
  where!: StyleCopyWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StyleCopyUpdateInput,
  })
  @ValidateNested()
  @Type(() => StyleCopyUpdateInput)
  @Field(() => StyleCopyUpdateInput, { nullable: false })
  data!: StyleCopyUpdateInput;
}

export { UpdateStyleCopyArgs as UpdateStyleCopyArgs };

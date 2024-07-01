/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { StyleCopy } from "./StyleCopy";
import { StyleCopyCountArgs } from "./StyleCopyCountArgs";
import { StyleCopyFindManyArgs } from "./StyleCopyFindManyArgs";
import { StyleCopyFindUniqueArgs } from "./StyleCopyFindUniqueArgs";
import { CreateStyleCopyArgs } from "./CreateStyleCopyArgs";
import { UpdateStyleCopyArgs } from "./UpdateStyleCopyArgs";
import { DeleteStyleCopyArgs } from "./DeleteStyleCopyArgs";
import { StyleCopyService } from "../styleCopy.service";
@graphql.Resolver(() => StyleCopy)
export class StyleCopyResolverBase {
  constructor(protected readonly service: StyleCopyService) {}

  async _styleCopiesMeta(
    @graphql.Args() args: StyleCopyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [StyleCopy])
  async styleCopies(
    @graphql.Args() args: StyleCopyFindManyArgs
  ): Promise<StyleCopy[]> {
    return this.service.styleCopies(args);
  }

  @graphql.Query(() => StyleCopy, { nullable: true })
  async styleCopy(
    @graphql.Args() args: StyleCopyFindUniqueArgs
  ): Promise<StyleCopy | null> {
    const result = await this.service.styleCopy(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => StyleCopy)
  async createStyleCopy(
    @graphql.Args() args: CreateStyleCopyArgs
  ): Promise<StyleCopy> {
    return await this.service.createStyleCopy({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => StyleCopy)
  async updateStyleCopy(
    @graphql.Args() args: UpdateStyleCopyArgs
  ): Promise<StyleCopy | null> {
    try {
      return await this.service.updateStyleCopy({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => StyleCopy)
  async deleteStyleCopy(
    @graphql.Args() args: DeleteStyleCopyArgs
  ): Promise<StyleCopy | null> {
    try {
      return await this.service.deleteStyleCopy(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}

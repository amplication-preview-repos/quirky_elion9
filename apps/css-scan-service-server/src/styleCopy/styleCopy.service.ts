import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StyleCopyServiceBase } from "./base/styleCopy.service.base";

@Injectable()
export class StyleCopyService extends StyleCopyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CssInspectionServiceBase } from "./base/cssInspection.service.base";

@Injectable()
export class CssInspectionService extends CssInspectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { PrismaClient } from "@prisma/client";
import { ProductGateway } from "../../../domain/product/gateway/product.gateway";
import { Product } from "../../../domain/product/entity/product";

export class ProductRepositoryPrisma implements ProductGateway {
    private constructor(private readonly prismaClient: PrismaClient) {

    }

    save(product: Product): Promise<void> {
        throw new Error("method not implemented");
    }
    list(): Promise<Product[]> {
        throw new Error("method not implemented");
    }
}
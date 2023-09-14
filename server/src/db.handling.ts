import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DBHandlingService {
  async findRecordsByValue(
    value: any,
    column: string,
    repository: Repository<any>,
  ) {
    const queryBuilder = repository.createQueryBuilder();
    const tableName = repository.metadata.name;

    const condition = `${tableName}.${column} = :searchValue`;
    queryBuilder.setParameter('searchValue', value);
    queryBuilder.where(condition);

    return await queryBuilder.getMany();
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Enrollment, Prisma } from '../../../../packages/database/generated/client';

@Injectable()
export class EnrollmentService {
    constructor(private prisma: PrismaService) {}
    
        async user(
            enrollmentWhereUniqueInput: Prisma.EnrollmentWhereUniqueInput,
        ): Promise<Enrollment | null> {
            return this.prisma.enrollment.findUnique({
            where: enrollmentWhereUniqueInput,
            });
        }
    
        async findAll() {
            return this.prisma.enrollment.findMany();
        }
    
        async findOne(id) {
            return this.prisma.enrollment.findUnique( {where: {enrollment_id: id}} );
        }
}

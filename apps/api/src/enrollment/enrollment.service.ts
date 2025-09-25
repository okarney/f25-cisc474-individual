import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class EnrollmentService {
    constructor(private prisma: PrismaService) {}
        
        async findAll() {
            return this.prisma.enrollment.findMany();
        }
    
        async findOne(id) {
            return this.prisma.enrollment.findUnique( {where: {enrollment_id: id}} );
        }
}

import { User } from 'src/0auth2.0/entites/user.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Site } from 'src/sites/entities/site.entity';
export declare class Contractor {
    contractorId: string;
    name: string;
    description: string;
    personInCharge: string;
    personInChargeEmail: string;
    personInChargePhone: string;
    address: string;
    VAT: string;
    docsRequiredWithin: string;
    requestedDocumentation: string;
    site: Site;
    employeesEmployed: Employee[];
    roleOfContractor: Role;
    contractorCreatedBy: User;
}

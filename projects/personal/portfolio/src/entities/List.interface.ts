import {ProjectItem} from "@/entities/ProjectItem.interface";
import {TechItem} from "@/entities/TechItem.interface";

export declare interface List {
    type: string;
    header: string;
    items: ProjectItem[] | TechItem[];
}

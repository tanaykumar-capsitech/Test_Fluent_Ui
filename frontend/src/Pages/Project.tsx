import { DetailsList, DocumentCard, Icon, Label, SearchBox, type IColumn } from "@fluentui/react"
import { cardStylesWithFullWidth, searchBoxStyles } from "../Utils/AllStyles"
import type { IDocument } from "../Utils/AllIntefaces";

const columns: IColumn[] = [
    {
        key: 'column1',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        data: 'string',
        onRender: (item: IDocument) => {
            return (
                <span>
                    {item.name}
                </span>
            );
        }
    },
    {
        key: 'column2',
        name: 'Due Date',
        fieldName: 'dueDate',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        data: 'string',
        onRender: (item: IDocument) => {
            return (
                <span>
                    {item.dueDate}
                </span>
            );
        }
    },
    {
        key: 'column3',
        name: 'Priority',
        fieldName: 'priority',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        data: 'string',
        onRender: (item: IDocument) => {
            return (
                <span>
                    {item.priority}
                </span>
            );
        }
    },
    {
        key: 'column4',
        name: 'Action',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        data: 'string',
        onRender: (item: IDocument) => {
            return (
                <span className="cursor-pointer p-1" onClick={() => { console.log(item.name) }}>
                    <Icon iconName="Edit"></Icon>
                </span>
            );
        }
    },
]

const items: IDocument[] = [
    {
        id: "DOC-001",
        name: "Project Requirements Document",
        dueDate: "2026-09-18",
        priority: "High",
        status: "pending",
    },
    {
        id: "DOC-002",
        name: "UI Design Specification",
        dueDate: "2026-09-19",
        priority: "Medium",
        status: "in progress",
    },
    {
        id: "DOC-003",
        name: "Database Schema",
        dueDate: "2026-09-20",
        priority: "High",
        status: "done",
    },
    {
        id: "DOC-004",
        name: "API Documentation",
        dueDate: "2026-09-21",
        priority: "Medium",
        status: "pending",
    },
    {
        id: "DOC-005",
        name: "Authentication Flow",
        dueDate: "2026-09-22",
        priority: "High",
        status: "in progress",
    },
    {
        id: "DOC-006",
        name: "User Guide",
        dueDate: "2026-09-23",
        priority: "Low",
        status: "pending",
    },
    {
        id: "DOC-007",
        name: "Testing Strategy",
        dueDate: "2026-09-24",
        priority: "High",
        status: "done",
    },
    {
        id: "DOC-008",
        name: "Deployment Checklist",
        dueDate: "2026-09-25",
        priority: "Medium",
        status: "in progress",
    },
    {
        id: "DOC-009",
        name: "Security Audit Report",
        dueDate: "2026-09-26",
        priority: "High",
        status: "pending",
    },
    {
        id: "DOC-010",
        name: "Release Notes",
        dueDate: "2026-09-27",
        priority: "Low",
        status: "done",
    },
    {
        id: "DOC-011",
        name: "Performance Analysis",
        dueDate: "2026-09-28",
        priority: "Medium",
        status: "in progress",
    },
    {
        id: "DOC-012",
        name: "Final Project Report",
        dueDate: "2026-09-30",
        priority: "High",
        status: "pending",
    },
];

export const Project = () => {
    return (
        <>
            <div className="w-full p-4 bg-[#F7F7F7] rounded-2xl overflow-hidden">
                <div className="w-full h-15 px-4 rounded-2xl flex items-start justify-between">
                    <Label styles={{ root: { lineHeight: 38, fontSize: 36, padding: 0, fontWeight: 400, color: '#080808' } }}>Projects</Label>
                    <SearchBox styles={searchBoxStyles} placeholder="Search task" className="outline-none"></SearchBox>
                </div>
                <div className="mb-5 mt-5">
                    <DocumentCard styles={cardStylesWithFullWidth(245)}>
                        <span className="font-semibold py-1 px-2 bg-[#227D53] w-fit rounded-lg text-white">Planning</span>
                        <div className="h-full overflow-y-auto">
                            <DetailsList className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden" columns={columns} items={items.filter(it => it.status == 'pending')}></DetailsList>
                        </div>
                    </DocumentCard>
                </div>
                <div className="mb-5">
                    <DocumentCard styles={cardStylesWithFullWidth(245)}>
                        <span className="font-semibold py-1 px-2 bg-[#5FBD92] w-fit rounded-lg text-white">In Progress</span>
                        <div className="h-full overflow-y-auto">
                            <DetailsList className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden" columns={columns} items={items.filter(it => it.status == 'in progress')}></DetailsList>
                        </div>
                    </DocumentCard>
                </div>
                <div className="mb-5">
                    <DocumentCard styles={cardStylesWithFullWidth(245)}>
                        <span className="font-semibold py-1 px-2 bg-[#13452D] w-fit rounded-lg text-white">Done</span>
                        <div className="h-full overflow-y-auto">
                            <DetailsList className="[scrollbar-width:none] [&::-webkit-scrollbar]:hidden" columns={columns} items={items.filter(it => it.status == 'done')}></DetailsList>
                        </div>
                    </DocumentCard>
                </div>
            </div>
        </>
    )
}
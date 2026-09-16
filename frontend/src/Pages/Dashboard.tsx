import { DefaultButton, DocumentCard, DocumentCardActivity, Icon, Label, mergeStyles, SearchBox, type IIconProps } from "@fluentui/react"
import { cardStyles, greenButtonStyles, normalButtonStyles, searchBoxStyles } from "../Utils/AllStyles";
import { Bar, BarChart, Pie, PieChart, Tooltip, XAxis, Label as Lab } from "recharts";


const iconClass = mergeStyles({
    color: '#464646',
    fontSize: 20,
});

const data = [
    { day: "S", value: 58, fill: '#227D53' },
    { day: "M", value: 82, fill: '#5FBD92' },
    { day: "T", value: 74, fill: '#13452D' },
    { day: "W", value: 90, fill: '#227D53' },
    { day: "T", value: 65, fill: '#5FBD92' },
    { day: "F", value: 52, fill: '#13452D' },
    { day: "S", value: 68, fill: '#227D53' },
]

const chartData = [
    { name: 'Completed', value: 50, fill: '#227D53' },
    { name: 'In Progress', value: 35, fill: '#13452D' },
    { name: 'Pending', value: 30, fill: '#5FBD92' },
];

const documentCardActivityPeople = [
    {
        name: 'Annie Lindqvist',
        profileImageSrc: '',
        activity: 'Created a few minutes ago',
    },
    {
        name: 'John Smith',
        profileImageSrc: '',
        activity: 'Updated 10 minutes ago',
    },
    {
        name: 'Emily Johnson',
        profileImageSrc: '',
        activity: 'Added a new task 25 minutes ago',
    },
    {
        name: 'Michael Brown',
        profileImageSrc: '',
        activity: 'Completed a task 1 hour ago',
    },
    {
        name: 'Sophia Williams',
        profileImageSrc: '',
        activity: 'Commented on the project 2 hours ago',
    },
    {
        name: 'Daniel Wilson',
        profileImageSrc: '',
        activity: 'Created a new project 3 hours ago',
    },
    {
        name: 'Olivia Davis',
        profileImageSrc: '',
        activity: 'Updated project details yesterday',
    },
    {
        name: 'James Anderson',
        profileImageSrc: '',
        activity: 'Completed the project 2 days ago',
    },
];

export const Dashboard = () => {
    const addIcon: IIconProps = { iconName: 'Add' };

    return (
        <>
            <div className="w-full flex flex-col gap-5 overflow-x-hidden">
                <div className="w-full h-20 px-4 bg-[#F7F7F7] rounded-2xl flex items-center justify-between">
                    <SearchBox styles={searchBoxStyles} placeholder="Search task"></SearchBox>
                    <div className="flex items-center justify-end gap-2">
                        <div className="w-[45px] h-[45px] bg-white flex items-center justify-center rounded-full">
                            <Icon iconName="Mail" className={iconClass}></Icon>
                        </div>
                        <div className="w-[45px] h-[45px] bg-white flex items-center justify-center rounded-full">
                            <Icon iconName="Ringer" className={iconClass}></Icon>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full bg-[#F7F7F7] rounded-2xl p-5">
                    <div className="mb-[20px] flex items-center justify-between">
                        <div className="w-full">
                            <Label styles={{ root: { fontSize: 32, padding: 0, fontWeight: 400, color: '#080808' } }}>Dashboard</Label>
                            <Label styles={{ root: { fontSize: 18, padding: 0, fontWeight: 300, color: '#8DA099' } }}>Plan, prioritize, and accomplish your task with ease.</Label>
                        </div>
                        <div className="flex gap-5">
                            <DefaultButton iconProps={addIcon} text="Add Project" styles={greenButtonStyles}></DefaultButton>
                            <DefaultButton text="Import Data" styles={normalButtonStyles} ></DefaultButton>
                        </div>
                    </div>
                    <div className="mb-[20px] w-full flex justify-between">
                        <DocumentCard styles={cardStyles(395, 170)}>
                            <div className="w-full text-[18px] font-semibold flex justify-between items-center">
                                <span>Total Projects</span>
                                <Icon iconName="NavigateForward" styles={{ root: { transform: 'rotate(315deg)', fontSize: 36, lineHeight: 36 } }}></Icon>
                            </div>
                            <p className="text-[48px] font-semibold">24</p>
                            <p className="text-[18px] text-[#89C54E]">5% increased from last month</p>
                        </DocumentCard>

                        <DocumentCard styles={cardStyles(395, 170)}>
                            <div className="w-full text-[18px] font-semibold flex justify-between items-center">
                                <span>Ended Projects</span>
                                <Icon iconName="NavigateForward" styles={{ root: { transform: 'rotate(315deg)', fontSize: 36, lineHeight: 36 } }}></Icon>
                            </div>
                            <p className="text-[48px] font-semibold">10</p>
                            <p className="text-[18px] text-[#89C54E]">6% increased from last month</p>
                        </DocumentCard>

                        <DocumentCard styles={cardStyles(395, 170)}>
                            <div className="w-full text-[18px] font-semibold flex justify-between items-center">
                                <span>Running Projects</span>
                                <Icon iconName="NavigateForward" styles={{ root: { transform: 'rotate(315deg)', fontSize: 36, lineHeight: 36 } }}></Icon>
                            </div>
                            <p className="text-[48px] font-semibold">12</p>
                            <p className="text-[18px] text-[#89C54E]">4% increased from last month</p>
                        </DocumentCard>

                        <DocumentCard styles={cardStyles(395, 170)}>
                            <div className="w-full text-[18px] font-semibold flex justify-between items-center">
                                <span>Pending Projects</span>
                                <Icon iconName="NavigateForward" styles={{ root: { transform: 'rotate(315deg)', fontSize: 36, lineHeight: 36 } }}></Icon>
                            </div>
                            <p className="text-[48px] font-semibold">2</p>
                            <p className="text-[18px] text-[#89C54E]">On discuss</p>
                        </DocumentCard>
                    </div>

                    <div className="text-center flex justify-between">
                        <DocumentCard styles={cardStyles(500, 450, false)}>
                            <Label styles={{ root: { textAlign: 'left', fontSize: '20px', paddingLeft: 10 } }}>Project Analytics</Label>
                            <BarChart style={{ margin: 'auto', width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                                responsive
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 0,
                                    left: 0,
                                    bottom: 5,
                                }}>
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ color: '#A1A8A6' }} />
                                <Bar dataKey="value" radius={[50, 50, 50, 50]} />
                                <Tooltip cursor={false} itemStyle={{ color: '#ffffff' }} contentStyle={{ backgroundColor: '#7c957b88', borderRadius: 15, border: '1px solid #7c957b88', color: '#ffffff' }} />
                            </BarChart>
                        </DocumentCard>

                        <DocumentCard styles={cardStyles(640, 450, false)}>
                            <Label styles={{ root: { textAlign: 'left', fontSize: '20px', paddingLeft: 10 } }}>Project Progress</Label>
                            <div className="mb-4 h-[85%] max-h-[80%] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                                {
                                    documentCardActivityPeople.map(doc => (
                                        <DocumentCardActivity styles={{ root: { textAlign: 'left' }, activity: { fontSize: 14, color:'#B7BBBA' }, name: { fontSize: 16 } }} activity={doc.activity} people={[{ name: doc.name, profileImageSrc: doc.profileImageSrc }]} />
                                    ))
                                }
                            </div>
                        </DocumentCard>

                        <DocumentCard styles={cardStyles(450, 450, false)}>
                            <Label styles={{ root: { textAlign: 'left', fontSize: '20px', paddingLeft: 10 } }}>Project Progress</Label>
                            <PieChart width='100%' height='100%' style={{ margin: '0 auto' }}>
                                <Pie
                                    stroke="none"
                                    dataKey="value"
                                    startAngle={180}
                                    endAngle={0}
                                    data={chartData}
                                    innerRadius='70%'
                                    outerRadius='100%'
                                    cornerRadius={50}
                                    cy="75%"
                                />
                                <Tooltip cursor={false} itemStyle={{ color: '#ffffff' }} contentStyle={{ backgroundColor: '#7c957b88', borderRadius: 15, border: '1px solid #7c957b88', color: '#ffffff' }} />
                                <Lab position='centerTop' className="text-[64px]">41%</Lab>
                            </PieChart>
                        </DocumentCard>
                    </div>
                </div>
            </div>
        </>
    )
}

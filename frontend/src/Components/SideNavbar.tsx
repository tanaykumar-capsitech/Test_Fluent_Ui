import { Icon, mergeStyles, Nav, type INavLinkGroup, type INavStyleProps, type INavStyles } from "@fluentui/react";


const navStyles = (props: INavStyleProps): Partial<INavStyles> => ({
    root: {
        width: 200,
        height: '89vh',
        boxSizing: 'border-box',
        overflowY: 'auto'
    },
    link: {
        fontSize: 16,
        color: props.isSelected ? '#1E774D' : 'gray',
        selectors:{
            ':hover':{
                color: 'gray',
            }
        }
    }
});

const iconClass = mergeStyles({
    color: '#1E774D',
    fontSize: 30,
    fontWeight: 600
});


export const SideNaveBar = () => {
    const navLinkGroups: INavLinkGroup[] = [
        {
            links: [
                {
                    name: 'Dashboard',
                    url: '/',
                    key: 'key1',
                    isExpanded: true,
                },
                {
                    name: 'Project',
                    url: '/project',
                    key: 'key2',
                    isExpanded: true
                }
            ],
        },
    ];


    return (
        <>
            <div className="bg-[#F7F7F7] rounded-[15px] flex flex-col">
                <div className="mt-2 mb-5 w-full flex items-center justify-center gap-3">
                    <Icon iconName="AnalyticsQuery" className={iconClass}></Icon>
                    <span className="font-semibold text-[20px]">My App</span>
                </div>
                <Nav
                    ariaLabel="Nav basic example"
                    styles={navStyles}
                    groups={navLinkGroups}
                />
            </div>
        </>
    )
}
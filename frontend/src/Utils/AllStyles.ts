import type { IButtonStyles, IDocumentCardStyles, ISearchBoxStyles } from "@fluentui/react";


// search box style
export const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: {
        width: 300,
        height: 45,
        borderRadius: 50,
        border: 'none',
        backgroundColor: '#ffffff',
        outline: 'none'
    }
};

// green button style
export const greenButtonStyles: Partial<IButtonStyles> = {
    root: {
        width: 170,
        height: 50,
        borderRadius: 50,
        border: 'none',
        backgroundImage: 'linear-gradient(150deg, #0F412B, #227C53)',
        outline: 'none'
    },
    label: {
        color: '#ffffff',
        fontWeight: 400,
        fontSize: 16
    },
    icon: {
        color: '#ffffff'
    }
};

// normal button style
export const normalButtonStyles: Partial<IButtonStyles> = {
    root: {
        width: 150,
        height: 50,
        borderRadius: 50,
        border: '1px solid #267350',
        backgroundColor: '#ffffff',
        outline: 'none'
    },
    label: {
        color: '#267350',
        fontWeight: 400,
        fontSize: 16
    },
    icon: {
        color: '#267350'
    },
    rootHovered: {
        backgroundColor: '#ffffff'
    }
};

// card style
export const cardStyles = (width: number, height: number, hoverable: boolean = true): IDocumentCardStyles => ({
    root: {
        padding: 20,
        maxWidth:'none',
        width: width,
        height: height,
        borderRadius: 30,
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        selectors: {
            ':hover': hoverable ? {
                color: '#ffffff',
                backgroundImage: 'linear-gradient(150deg, #0F412B, #227C53)',
            } : { }
        }
    }
})
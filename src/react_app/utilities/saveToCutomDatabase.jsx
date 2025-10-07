import { serialize } from "@wordpress/blocks";

export const saveToCustomDatabase = async (title, blocks, selection) => {
    const serializedContent = serialize(blocks);
    console.log("Saving: ");
    console.log(serializedContent);
    // // Send to  custom API  
    try {
        const response = await fetch('http://poc-gutenberg-be.test/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                content: serializedContent,
                blocks: blocks,
                selection: selection
            })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response received: ", data);
    } catch (error) {
        console.error('Error: ', error);
    }
};


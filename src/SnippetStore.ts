import { writable, get } from 'svelte/store';
// import { MongoClient } from 'mongodb';

// SnippetStore
// Code Snippet
// Title, Code, Language, Favorite

async function storeDataToDB(data: CodeSnippet): Promise<void> {
    // const client = await MongoClient.connect('mongodb://localhost:27017', {
    //     // useUnifiedTopology: true,
    // });
    // // Select MongoDB database and collection
    // const db = client.db('code_snippets_db');
    // const collection = db.collection<CodeSnippet>('code_snippets_collections1');

    // // Insert data into collection
    // await collection.insertOne(data);
    
    // // Close MongoDB connection
    // client.close();
}


export const snippetStore = writable<CodeSnippet[]>([]);  // [codeSnippet1, codeSnippet2, ...]


// addSnippet
export function addSnippet(input: CodeSnippetInput){
    let snippets = get(snippetStore);  // $snippetStore -> listen to changes to the value of snippetStore
    snippetStore.update(() => {
        const snippetData = [{...input, favorite: false }, ...snippets]
        // storeDataToDB(snippetData);
        return snippetData
    });
    
}

// deleteSnippet
export function deleteSnippet(index: number) {  // if there is a database, delete by ID?
    let snippets = get(snippetStore);
    snippets.splice(index, 1);  // removes 1 item from index 'index'

    snippetStore.update(() => {
        return snippets;
    });
}

// toggleFavorite
export function toggleFavorite(index: number) {  // if there is a database, delete by ID?
    let snippets = get(snippetStore);

    snippetStore.update(() => {  // [ { favorite: true }, { favorite: false }]
        return snippets.map((snippet, snippetIndex) => {
            if (snippetIndex === index) {
                return { ...snippet, favorite: !snippet.favorite }
            }
            return snippet;
        });
    });
}

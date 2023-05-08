import { Code, MongoClient } from 'mongodb';

export async function storeDataToDB(data: CodeSnippet): Promise<void> {
    const client = await MongoClient.connect('mongodb://localhost:27017', {
        // useUnifiedTopology: true,
    });
    // Select MongoDB database and collection
    const db = client.db('code_snippets_db');
    const collection = db.collection<CodeSnippet>('code_snippets_collections1');

    // Insert data into collection
    await collection.insertOne(data);
    
    // Close MongoDB connection
    client.close();
}

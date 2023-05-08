<script lang='ts'>
	import CodeSnippetCard from "../CodeSnippetCard.svelte";
	import { snippetStore, addSnippet } from "../SnippetStore";
	import type { PageData } from "./$types";
	export let data: PageData;
	

	let formData : CodeSnippetInput = {
		title: '',
		language: 'html',
		code: '',
	}

	// createSnippet(input: CodeSnippetInput)
	snippetStore.set(data.snippets)
	// SnippetStore -> a local writable that allows us to store code snippets
	// create / delete snippets
	// favorite snippets
	// +page.ts to initially load in some example snippets (mocking a database request)
	const clearFields = () => {

	}

</script>


<div class='flex justify-center'>
	<div class='grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]'>
		<h3 class='text-center py-6'>Create A Code Snippet</h3>
		<div class='card p-4 w-full text-token space-y-4'>
			<label class='label'>
				<span>Snippet Title</span>
				<input id='snippet-title' class='input' type='text' placeholder='Enter title here...' bind:value={formData.title}/>
			</label>

			<label class='label'>
				<span>Programming Language</span>
				<select class='select' bind:value={formData.language}>
					<option value='html'>HTML</option>
					<option value='css'>CSS</option>
					<option value='typescript'>TypeScript</option>
					<option value='python'>Python</option>
					<option value='java'>Java</option>
					<option value='c#'>C#</option>
					<option value='rust'>Rust</option>
				</select>
			</label>

			<label class='label'>
				<span>Code Snippet</span>
				<textarea id='code-snippet-field' class='textarea' rows='4' placeholder="Enter your code snippet here..." bind:value={formData.code}/>
			</label>
			<button type='button' class='btn btn-sm variant-filled-primary' on:click={() => addSnippet(formData)} >
				Create Snippet
			</button>
		</div>
		<div class='text-center py-6'>
			<h2>My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<CodeSnippetCard snippet={snippet} index={index}/>
		{/each}
	</div>
</div>

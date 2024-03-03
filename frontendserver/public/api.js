

async function fetchClassification(input) {
    console.log(`Fetching ${input}`);
    const params = new URLSearchParams({
        query: input
    })
    const response = await fetch(`/classiciation?${params}`,)
    return response.json();
}

export { fetchClassification };

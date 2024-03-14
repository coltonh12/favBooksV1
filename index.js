import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vmhdyikknzawqfvslqdl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGR5aWtrbnphd3FmdnNscWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDMxMzEsImV4cCI6MjAyNjAxOTEzMX0.KY21eyLCqGdjd6U7zMtFWHr5mGS0ogAHld1TMK1rLWE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchAndDisplayBooks() {
    try {
        const { data: books1, error } = await supabase
            .from('books1')
            .select('*');

        if (error) {
            throw error;
        }

        const tableBody = document.querySelector('#books1 tbody');
        tableBody.innerHTML = ''; // Clear existing content

        books1.forEach(book => {
            const row = tableBody.insertRow();
            const titleCell = row.insertCell();
            titleCell.textContent = book.title;
            // Add additional cells for other data if needed
        });
    } catch (error) {
        console.error('Error fetching or displaying books:', error.message);
    }
}

fetchAndDisplayBooks();

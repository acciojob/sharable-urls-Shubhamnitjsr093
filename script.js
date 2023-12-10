// your code here
function updateUrl() {
            // Get input values
            var name = document.getElementById('name').value;
            var year = document.getElementById('year').value;

            // Construct the query string
            var queryString = "?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

            // Update the h3 element with the new URL
            document.getElementById('url').innerText = "https://localhost:8080/" + queryString;
        }
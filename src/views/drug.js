import React from 'react'
import Create from './Create';

const Drug = (props) => {
  return (
    <h1>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fetch and Update</title>
    </h1>
    <body>
        <h1>Data from Backend</h1>
        <ul id="output"></ul>

        <script src="Create.js"></script>

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                fetchData();
            });
        </script>
    </body>
    </h1>
  )
}
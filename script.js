async function fetchData() {
    const result = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await result.json();
  
    let tab = "";
  
    //   console.log(data);
  
    data.forEach((data) => {
      tab += `<tr>
                <td>${data.postId}</td>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                 <td>${data.body}</td>
                </tr>`;
    });
  
    document.getElementById("content").innerHTML = tab;
  
    $("#myTable").DataTable({
      data: data,
      columns: [
        { data: "postId" },
        { data: "id" },
        { data: "name" },
        { data: "email" },
        { data: "body" },
      ],
    });
  }
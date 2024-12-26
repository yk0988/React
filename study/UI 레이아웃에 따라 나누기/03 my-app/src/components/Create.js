<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Create</title>
</head>
<body>
  <article>
    <h2>Create</h2>
    <form id="createForm">
      <p> 
        <input type="text" id="title" name="title" placeholder="title" />
      </p>
      <p>
        <textarea id="body" name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="Create" />
      </p>
    </form>
  </article>

  <script>
    document.getElementById('createForm').addEventListener('submit', function(event) {
      event.preventDefault(); // 페이지 리로딩 방지

      // 입력된 값 가져오기
      const title = document.getElementById('title').value;
      const body = document.getElementById('body').value;

      // 데이터 처리 (예: 콘솔에 출력)
      console.log('Title:', title);
      console.log('Body:', body);

      // 여기에 필요한 데이터 처리 로직 추가
    });
  </script>
</body>
</html>

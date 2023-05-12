
    function clearStorage() {
        if (confirm("Are you sure you want to clear the list?")) {
          localStorage.clear();
          location.reload();
        }
      }
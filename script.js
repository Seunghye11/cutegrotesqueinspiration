  // 모든 모달 트리거 박스 선택
  const boxes = document.querySelectorAll('.modal-trigger');

  boxes.forEach(box => {
    const modal = box.querySelector('.modal');
    const closeBtn = box.querySelector('.close');

    // 박스 클릭 시 모달 열기
    box.addEventListener('click', () => {
      modal.style.display = 'block';
    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // 상위 박스 클릭 방지
      modal.style.display = 'none';
    });

    // 모달 바깥 영역 클릭 시 닫기
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
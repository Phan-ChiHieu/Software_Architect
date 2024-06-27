import React, { useCallback, useMemo } from "react";

export default function ExpensiveComponent({ value }: any) {
  const expensiveCalculation = useMemo(() => {
    console.log("Đang tính toán giá trị phức tạp...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + value;
  }, [value]);

  // Callback sử dụng giá trị đã memo hóa
  const handleClick = useCallback(() => {
    alert(`Giá trị tính toán: ${expensiveCalculation}`);
  }, [expensiveCalculation]);

  return (
    <div>
      <p>Giá trị: {expensiveCalculation}</p>
      <button onClick={handleClick}>Hiển thị giá trị tính toán</button>
    </div>
  );
}

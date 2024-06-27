# Hiểu về useCallback

-**useCallback** là một hook trong React giúp bạn tối ưu hiệu suất của ứng dụng. Nó cho phép bạn "ghi nhớ" một hàm, để hàm đó không bị tạo lại mỗi khi component cha re-render.

# 1. Cách dùng và trường hợp dùng

## 1.1 **Khi component con cần dùng một hàm nào đó mà phải viết ở component cha để tiện xử lý logic**

```javascript
//  Component Cha (client-page.tsx)
// Dùng useCallback ở function hoặc const của component cha
// ...
const [count, setCount] = useState(0);

const increment = useCallback(() => {
  setCount((prev) => prev + 1);
}, []);

// ...
return (
  <div>
    <ChildComponent onCount={increment} />
  </div>
);

//==========================

// Component Con (./component/ChildComponent.tsx)
// Dùng memo ở component con thì mới hoạt động

// ....
const ChildComponent = ({ onCount }: Props) => {
  console.log("ChildComponent rendered");
  return (
    <div>
      <hr />
      <h1>ChildComponent</h1>
      <button onClick={onCount}>Count ở component CON</button>
    </div>
  );
};

// Nhớ dùng memo
export default memo(ChildComponent);
```

- **Sẽ không hoạt động và không cần truyền useCallback hay sử dụng memo** nếu truyền _count_ xuống component Con.

```javascript
const [count, setCount] = useState(0);

// ...
// Không cần dùng useCallback and memo
return (
  <div>
    <ChildComponent onCount={increment} count={count} />
  </div>
);
```

---

## 1.2 Khi dùng với onChange của input

```javascript
//  Component Cha (client-page.tsx)
// Dùng useCallback ở function hoặc const của component cha

const handleSearch = useCallback((e: any) => {
  console.log("handleSearch in  ClientPage", e.target.value);
}, []);

// ...
return (
  <div>
    <SearchComponent onSearch={handleSearch} />
  </div>
);

//==========================

// Component Con (./component/SearchComponent.tsx)
// Dùng memo ở component con thì mới hoạt động

function SearchComponent({ onSearch }: any) {
  console.log("Search Rendering !!!");
  return (
    <div>
      <input
        type="text"
        onChange={onSearch}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white border-2 border-violet-700"
      />
    </div>
  );
}

export default memo(SearchComponent);
```

function getFirstElement<T>(array: T[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstElement<number>(numbers);

const strings = ["sdf", "abc"];
const firstString = getFirstElement(strings);

// =================================================================
function convertToArray<T>(input: T): T[] {
  return [input];
}

const _convertToArrayStr = convertToArray("hello");
const _convertToArrayNum = convertToArray(123);

// =================================================================

function getIndexOfArrayItem<T>(array: T[], arrayItem: T) {
  return array.findIndex((item) => item === arrayItem);
}

const arr = [55, 99, 77];
const _getIndexOfArrayItem = getIndexOfArrayItem(arr, 77);

// =================================================================

function createArrayPair<T, K>(input1: T, input2: K): [T, K] {
  return [input1, input2];
}

const _createArrayPair = createArrayPair("Hello", 1);
// =================================================================

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;
type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: "Kayle",
    age: 28,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "sdf",
  },
  isError: false,
};

// =================================================================

type ApiResponseV1<Data extends object> = {
  data: Data;
  isError: boolean;
};

const responseOb: ApiResponseV1<{ name: string; age: number }> = {
  data: {
    name: "Kayle",
    age: 28,
  },
  isError: false,
};

// =================================================================

type ApiResponseV2<Data extends object = { status: number }> = {
  data: Data;
  isError: boolean;
};

const responseStatus: ApiResponseV2 = {
  data: {
    status: 200,
  },
  isError: false,
};

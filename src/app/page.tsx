interface DataType {
  title:string,
  children?:DataType[]
}
export default function Home() {
  const data :DataType[] = [
    {
      title: "Menu1",
      children: [
        {
          title: "Menu2",
          children: [
            {
              title: "Menu3",
              children: [
                {
                  title: "Menu4",
                  children: [
                    {
                      title: "Menu5",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Menu2.1",
          children: [{ title: "Menu3.1" }, { title: "Menu3.2" }],
        },
        { title: "Menu2.2" },
      ],
    },
  ];
  const iterate = (data:DataType[],isChild?:boolean) => {
    return (
      <ul>
        {data.map((item) => (
          <li className={isChild ? "ps-4" :undefined} key={item.title} > 
            {item.title}
            {item.children && item.children.length > 0 && iterate(item.children,isChild=true)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
       {iterate(data)}
      </main>
    </div>
  );
}

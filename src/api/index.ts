export const getListData = () => {
  return new Promise<{ name: string; id: string | number; createBy?: string }[]>((r) => {
    r([
      {
        name: '数据包1',
        id: 1,
        createBy: 'admin',
      },
      {
        name: '数据包2',
        id: 2,
        createBy: 'admin',
      },
      {
        name: '数据包31',
        id: 3,
        createBy: 'admin',
      },
      {
        name: '数据包4',
        id: 4,
        createBy: 'admin',
      },
      {
        name: '数据包5',
        id: 5,
        createBy: 'admin',
      },
      {
        name: '数据包6',
        id: 6,
        createBy: 'admin',
      },
      {
        name: '数据包7',
        id: 7,
        createBy: 'admin',
      },
      {
        name: '数据包8',
        id: 8,
        createBy: 'admin',
      },
      {
        name: '数据包9',
        id: 9,
        createBy: 'admin',
      },
      {
        name: '数据包10',
        id: 10,
        createBy: 'admin',
      },
      {
        name: '数据包11',
        id: 11,
        createBy: 'admin',
      },
      {
        name: '数据包12',
        id: 12,
        createBy: 'admin',
      },
      {
        name: '数据包13',
        id: 13,
        createBy: 'admin',
      },
      {
        name: '数据包14',
        id: 14,
        createBy: 'admin',
      },
    ])
  })
}

export const getDatasetListData = () => {
  return new Promise<{ name: string; id: string | number; createBy?: string }[]>((r) => {
    r([
      {
        name: '数据集1',
        id: 1,
        createBy: 'admin',
      },
      {
        name: '数据集2',
        id: 2,
        createBy: 'admin',
      },
      {
        name: '数据集3',
        id: 3,
        createBy: 'admin',
      },
    ])
  })
}

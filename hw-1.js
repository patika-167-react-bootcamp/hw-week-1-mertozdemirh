
// move(17,6) // dosyayı klasöre taşıyacak
// copy(18,7) // kopyasını oluşturacak
// remove(17) // dosyayı silecek
// removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
// parentFolderOf(17) // ==> 5


const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
    },
  ]
  
  function move(fileId, folderId){
    // fileId parametresinin ait olduğu folder
    const fromFolder = folders.find(folder =>folder.files && folder.files.find(file=>file.id===fileId)) 
    // folderId ile iliskili folder 
    const toFolder = folders.find(folder=>folder.id ===folderId)
    // fromFolder ve toFolder undefined değilse tasiyacagimiz dosyanın fromFolder icindeki indexini bulup,
    //   index yardımıyla fromFolderdan silip toFoldera ekleme.
    if(fromFolder && toFolder){
      const moveFileIndex = fromFolder.files.findIndex(file=>file.id ===fileId)
  
      toFolder.files = (toFolder.files) ? toFolder.files : []
      const moveFile = fromFolder.files.splice(moveFileIndex,1)[0] 
      toFolder.files.push(moveFile)
    }
  }
  
  function copy (fileId, folderId){
      // fileId parametresinin ait olduğu folder
    const fromFolder = folders.find(folder =>folder.files && folder.files.find(file=>file.id===fileId))
      // folderId ile iliskili folder 
    const toFolder = folders.find(folder=>folder.id ===folderId)
  
    // fromFolder ve toFolder undefined değilse kopyalayacağımız dosyaya erişip bir kopyasını toFoldera ekleme 
    if(fromFolder && toFolder){
      const moveFile = fromFolder.files.find(file=>file.id ===fileId)
  
      toFolder.files = (toFolder.files) ? toFolder.files : []
      toFolder.files.push(moveFile)
    }
  } 

  
  function remove (fileId){
     // fileId parametresinin ait olduğu folder
     const removeFolder = folders.find(folder => folder.files && folder.files.find(file=>file.id===fileId)) 
     // removeFolder undefined degilse dosyanın removeFolder içindeki indexini bulup silme
      if(removeFolder){
        const indexNm = removeFolder.files.indexOf(file => file.id ===fileId)
        removeFolder.files.splice(indexNm,1)
      }
  }
  
  function removeFolder(folderId){  
    const removeFolderIndex = folders.findIndex(folder=>folder.id ===folderId)
    removeFolderIndex !== -1 && folders.splice(removeFolderIndex,1)  
  }
  
  function parentFolderOf(fileId){
    const parentFolder = folders.find(folder =>folder.files && folder.files.find(file=>file.id===fileId))
    return parentFolder ? parentFolder.id : -1
    
  }
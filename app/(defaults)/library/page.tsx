"use client";
import React from 'react';
import FileExplorerTree from '@/components/FileExploreTree';
import FileExplorer from '@/components/FileExplore';
import { FileNode } from '@/types/File';
import _files from '@/data/files.json';
interface LibraryProps {
  files: FileNode[];
}


const Library: React.FC<LibraryProps> = ({  }) => {
    const files:any = _files;
  return (
    <div>
      <FileExplorer initialFiles={files} />
    </div>
  );
};

export default Library;

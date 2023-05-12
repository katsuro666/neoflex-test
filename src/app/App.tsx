import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '../router';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.app}>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    </div>
  );
}
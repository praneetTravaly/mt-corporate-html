import * as icons from 'lucide';
const names = ['Globe', 'ShieldCheck', 'Zap', 'Activity', 'Database', 'BarChart3', 'Cpu', 'TrendingUp', 'Layout', 'Monitor', 'Workflow', 'Users', 'Smartphone', 'Link', 'CreditCard', 'Settings', 'X', 'Network', 'ArrowRight'];

for (const name of names) {
  if (icons[name]) {
    console.log(`${name}: `, icons[name]);
  }
}
